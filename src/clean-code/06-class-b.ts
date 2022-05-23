(() => {
  // No aplicado el principio de responsabilidad
  type Gender = "M" | "F";

  interface PersonProps {
    birthDate: Date;
    gender: Gender;
    name: string;
  }
  interface UserProps extends PersonProps {
    email: string;
    role: string;
  }

  interface UserSettingsProps extends UserProps {
    lastOpenFolder: string;
    workingDirectory: string;
  }

  class Person {
    public birthDate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthDate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthDate = birthDate;
    }
  }

  class User extends Person {
    private lastAccess: Date;
    public email: string;
    public role: string;

    constructor({ email, role, birthDate, gender, name }: UserProps) {
      super({ birthDate, gender, name });
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredential(): Boolean {
      return true;
    }
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;
    constructor(
      {birthDate,email,gender,lastOpenFolder,name,role,workingDirectory} : UserSettingsProps
    ) {
      super({birthDate,email,gender,name,role});
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
    }
  }
  const userSettings = new UserSettings({
    birthDate : new Date('1998/08/05'),
    email : 'f.colchon.nnz@gmail.com',
    gender : 'M',
    lastOpenFolder : '/usr/documents',
    name : 'Fernando',
    role : 'Admin',
    workingDirectory : '/usr/desktop'
  });
  console.log({
    userSettings,
    areCredentialsValid: userSettings.checkCredential(),
  }); 
})();
