import Activity1 from "./images/activity1.jpeg"
export default function LoginLandingGithub() {
    var background = Activity1

    const handleInputChange = (event) => {
        console.log(event.target.value)
    }

    return (
        <div style={{ 
            backgroundImage: `linear-gradient(
                rgba(0, 0, 0, 0.7), 
                rgba(0, 0, 0, 0.7)
                ),
                url(${background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
        }}>
            <div className="d-flex flex-column align-items-center justify-content-center vh-100">
                <h1 className="text-light">Welcome!</h1>
            </div>
        </div>
    );
}