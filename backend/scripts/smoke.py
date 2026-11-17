import json, urllib.request, urllib.error, os, uuid
BASE=os.getenv('API_URL','http://localhost:8080/api')
def request(path, method='GET', body=None, token='', status=200):
 data=None if body is None else json.dumps(body).encode()
 req=urllib.request.Request(BASE+path,data=data,method=method,headers={'Content-Type':'application/json','Authorization':'Bearer '+token})
 try:
  with urllib.request.urlopen(req,timeout=30) as res: code=res.status; payload=res.read()
 except urllib.error.HTTPError as e: code=e.code;payload=e.read()
 assert code==status,(path,code,payload.decode()[:300])
 return json.loads(payload)
admin=request('/auth/login','POST',{'email':os.environ['ADMIN_EMAIL'],'password':os.environ['ADMIN_PASSWORD'],'role':'ADMIN'})['token']
uid=uuid.uuid4().hex[:12]
u=request('/auth/register','POST',{'studentCode':uid,'name':'Smoke test','className':'TEST','email':uid+'@test.local','password':'TestOnly123!','role':'ADMIN'})
assert u['user']['role']=='STUDENT'
token=u['token'];request('/admin/users',token=token,status=403)
exam=request('/admin/catalog/exams','POST',{'id':'test_'+uid,'title':'Smoke test','majorId':'','questions':[{'q':'1 + 1 = ?','o':['1','2','3','4'],'a':1}]},admin)
a=request('/attempts','POST',{'examId':exam['id']},token)
result=request('/attempts/'+a['id']+'/submit','POST',{'answers':[{'index':0,'order':[1,0,3,2],'picked':0}]},token)
assert result['correct']==1 and result['pct']==100
assert request('/attempts/'+a['id']+'/submit','POST',{},token)==result
request('/admin/catalog/exams/'+exam['id'],'DELETE',token=admin)
request('/admin/users/'+u['user']['id'],'DELETE',token=admin)
print('PASS: role enforcement, server grading, shuffled options, idempotent submit, account block')
