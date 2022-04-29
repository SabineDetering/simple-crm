export class User {
    // userId: string;
    firstName: string;
    lastName: string;
    areaCode: string;
    phone: string;
    email: string;
    // birthDate: number;
    street: string;
    zipCode: string;
    city: string;
    country: string;

    constructor(obj?: any) {
        // this.userId = obj ? obj.userId : '';
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.areaCode = obj ? obj.areaCode : '';
        this.phone = obj ? obj.phone : '';
        this.email = obj ? obj.email : '';
        // this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
        this.country = obj ? obj.country : '';
    }

    toJSON() {
        return {
            // userId: this.userId,
            firstName: this.firstName,
            lastName: this.lastName,
            areaCode: this.areaCode,
            phone: this.phone,
            email: this.email,
            // birthDate: this.birthDate,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
            country:this.country
        }
    }

}