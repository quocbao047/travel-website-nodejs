import "./register.scss";
import { Link } from "react-router-dom";
import axios from "axios"

function Register() {
  const [error,setError] = useState("")
  const [isLoading,setIsLoading] useState(false)
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    setError("")
    const formData = new FormData(e.target);
    
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    
    try {
 
      const res = await axios.post("http://localhost:8800/api/auth/register"),{
        username,email,password
      })

      navigate("/login")

    } catch (error) {
      setError(error.response.data.message)
    }
  };
  return (
    <div className="register">
      <div className="formContainer">
        <form ac onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button >Register</button>
          {error && <span>{error}</span>}
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Register;
