export class UserDetails{
    public static currentUser= '';

    public static setCurrentUser(email) {
        this.currentUser=email;
    }
    public static getCurrentUser() {
    
        return this.currentUser;

    }
}