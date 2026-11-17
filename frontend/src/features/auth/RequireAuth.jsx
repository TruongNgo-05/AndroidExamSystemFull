import {Navigate,useLocation} from "react-router-dom";
import {useAuth} from "./AuthContext.jsx";
export default function RequireAuth({children,role}){
  const {user,loading}=useAuth(),location=useLocation();
  if(loading)return <section className="panel">Đang kiểm tra tài khoản…</section>;
  if(!user)return <Navigate replace to={`/login?next=${encodeURIComponent(location.pathname+location.search)}`}/>;
  if(role&&user.role!==role)return <section className="panel"><h1>Không có quyền truy cập</h1><a href="/">Về trang chủ</a></section>;
  return children;
}
