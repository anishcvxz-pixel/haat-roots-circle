// Legacy Index page is no longer used as a route. Kept as a redirect for safety.
import { Navigate } from "react-router-dom";

const Index = () => <Navigate to="/" replace />;

export default Index;
