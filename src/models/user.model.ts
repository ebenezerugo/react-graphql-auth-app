export default interface User {
    _id: string;
    uuid: String;
    first_name: String;
    last_name: String;
    email: String;
    email_verified_at: Date;
    email_verification_token: String;
    created_at: Date;
    updated_at: Date;
}