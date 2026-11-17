import test from 'node:test';
import assert from 'node:assert/strict';
import {monitorSession} from '../src/features/auth/sessionMonitor.js';
test('session monitoring checks on focus and visibility, does not overlap, and cleans up',async()=>{
 const events=new Map(),visibility=new Map();let interval,cleared=false,calls=0,release;
 const win={setInterval(fn,ms){assert.equal(ms,20000);interval=fn;return 1;},clearInterval(){cleared=true;},addEventListener(k,v){events.set(k,v);},removeEventListener(k){events.delete(k);}};
 const doc={hidden:false,addEventListener(k,v){visibility.set(k,v);},removeEventListener(k){visibility.delete(k);}};
 const stop=monitorSession(()=>{calls++;return new Promise(r=>{release=r;});},{window:win,document:doc});
 assert.equal(calls,1);interval();events.get('focus')();assert.equal(calls,1);release();await Promise.resolve();
 doc.hidden=true;interval();assert.equal(calls,1);doc.hidden=false;visibility.get('visibilitychange')();assert.equal(calls,2);release();await Promise.resolve();
 stop();interval();assert.equal(calls,2);assert.ok(cleared);assert.equal(events.size,0);assert.equal(visibility.size,0);
});
