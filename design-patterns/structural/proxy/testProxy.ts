import Proxy from "./Proxy";
import RealSubject from "./RealSubject";

const realSubject: RealSubject = new RealSubject();
const proxy: Proxy = new Proxy(realSubject);

proxy.request();
