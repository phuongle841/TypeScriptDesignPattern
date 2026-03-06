interface personBean {
  getGender(): string;
  getHotOrNot(): number;
  getInterests(): string;
  getName(): string;

  setGender(gender: string): void;
  setHotOrNot(rating: number): void;
  setInterests(interests: string): void;
  setName(name: string): void;
}

interface personalInformation {
  gender?: string;
  interests?: string;
  name?: string;
}

class PersonBeanImp implements personBean {
  gender: string;
  interests: string;
  name: string;
  rating: number;
  ratingCount: number;
  constructor({ name = "", gender = "", interests = "" }: personalInformation) {
    this.gender = gender;
    this.interests = interests;
    this.name = name;
    this.rating = 0;
    this.ratingCount = 0;
  }
  getName(): string {
    return this.name;
  }
  getGender(): string {
    return this.gender;
  }
  getInterests(): string {
    return this.interests;
  }
  getHotOrNot(): number {
    if (this.ratingCount == 0) {
      return 0;
    }
    return this.rating / this.ratingCount;
  }
  setName(name: string): void {
    this.name = name;
  }
  setGender(gender: string): void {
    this.gender = gender;
  }
  setInterests(interests: string): void {
    this.interests = interests;
  }
  setHotOrNot(rating: number): void {
    this.rating += rating;
    this.ratingCount++;
  }
}
