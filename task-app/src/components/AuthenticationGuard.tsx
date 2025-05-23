import { withAuthenticationRequired } from '@auth0/auth0-react';
import type { ComponentType } from 'react';

type AuthenticationGuardProps = {
    component: ComponentType;
}

const AuthenticationGuard: React.FC<AuthenticationGuardProps> = ({component})=>{
    const Component = withAuthenticationRequired(component, {
        onRedirecting: () => <div>Redirecting you to the login page...</div>,
    })

    return(
        <Component/>
    )
}

export default AuthenticationGuard;