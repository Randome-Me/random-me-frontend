import { Icon } from "@iconify/react"

export default function LoginSocialMedia() {
  const loginWithGoogle = () => {
    alert("Logging in with Google")
  }

  const loginWithFacebook = () => {
    alert("Logging in with Facebook")
  }

  return (
    <div className="flex justify-center items-center flex-col">
      <span className="mb-1">or login with</span>
      <div className="flex space-x-2">
        <h2 className="sr-only">Login with Google</h2>
        <a href="">
          <Icon
            className="cursor-pointer w-9 h-9"
            icon="flat-color-icons:google"
            onClick={loginWithGoogle}
          />
        </a>
        <h2 className="sr-only">Login with Facebook</h2>
        <a href="">
          <Icon
            className="cursor-pointer text-[#4267b2] w-8 h-8"
            icon="akar-icons:facebook-fill"
            onClick={loginWithFacebook}
          />
        </a>
      </div>
    </div>
  )
}
