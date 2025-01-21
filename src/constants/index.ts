import { AuthFormProps, SIGN_IN_FORM, SIGN_UP_FORM } from "./forms"
import { LANDING_PAGE_MENU, MenuProps } from "./menus"

type GroupleConstantsProps = {
    landingPageMenu: MenuProps[]
    signUpForm: AuthFormProps[]
    signInForm: AuthFormProps[]
}

export const GROUPLE_CONSTANTS: GroupleConstantsProps = {
    landingPageMenu: LANDING_PAGE_MENU,
    signUpForm: SIGN_UP_FORM,
    signInForm: SIGN_IN_FORM,
}
