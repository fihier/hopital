import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(keycloak: KeycloakService) : () => Promise<boolean> {

  return () =>

    keycloak.init({
      config: {
        url: 'http://localhost:8080/auth',
        realm: 'Bocobi2realm',
        clientId: 'Bocobi2App',
      },
      initOptions: {
        checkLoginIframe: true,
        checkLoginIframeInterval: 25
      },
      loadUserProfileAtStartUp: true
    });
}




 //   onLoad: 'check-sso',
      //   silentCheckSsoRedirectUri:
      //     window.location.origin + '/assets/silent-check-sso.html',
