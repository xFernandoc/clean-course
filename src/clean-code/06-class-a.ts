(() => {
  // no aplicando el principio de responsabilidad unica
  type Gender = "M" | "F";
  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthDate: Date
    ) {}
  }

  class User extends Person {
    private lastAccess: Date;
    constructor(
      public email: string,
      public rol: string,
      name: string,
      gender: Gender,
      birthDate: Date
    ) {
      super(name, gender, birthDate);
      this.lastAccess = new Date();
    }

    checkCredential(): Boolean {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthDate: Date
    ) {
      super(email, role, name, gender, birthDate);
    }
  }

  const userSettings = new UserSettings(
    '/usr/home',
    '/usr/desktop',
    'f.colchon.nnz@gmail.com',
    'admin',
    'fernando',
    'M',
    new Date(0)
  )
  console.log({userSettings, areCredentialsValid : userSettings.checkCredential()});
})();
