import SignUpForm from "@/components/forms/sign-up"
import { GoogleAuthButton } from "@/components/global/google-oauth-button"
import { Separator } from "@/components/ui/separator"

type Props = {}

const SignUpPage = (props: Props) => {
  return (
    <>
      <h5 className="font-bold text-base text-themeTextWhite">Signup</h5>
      <p className="text-themeTextGray leading-tight">
        Connect with people worldwide, join or create groups, explore courses,
        and unlock your full potential.
      </p>
      <SignUpForm />
      <div className="my-10 w-full relative">
        <div className="bg-black p-3 absolute text-themeTextGray text-xs top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          OR CONTINUE WITH
        </div>
        <Separator orientation="horizontal" className="bg-themeGray" />
      </div>
      <GoogleAuthButton method="signup" />
    </>
  )
}

export default SignUpPage
