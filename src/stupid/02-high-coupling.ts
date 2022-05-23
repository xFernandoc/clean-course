(() => {
  // no aplicando el prinicipio de responsabilidad unica
  // alto acomplamiento
  type Gender = "M" | "F";
  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthDate: Date
    ) {}
  }

  class User extends Person {
    constructor(
      public email: string,
      public rol: string,
      private lastAccess: Date,
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
      super(email, role, new Date(), name, gender, birthDate);
    }
  }

  const userSettings = new UserSettings(
    '/usr/home',
    '/usr/desktop',
    'f.colchon.nnz@gmail.com',
    'admin',
    'fernando',
    'M',
    new Date('1998-08-05')
  )
  console.log({userSettings, areCredentialsValid : userSettings.checkCredential()});
})();
