(() => {
  // Aplicado el principio de responsabilidad
  // Priorizar la composición frente a la herencia (UserSettings)
  type Gender = "M" | "F";

  interface PersonProps {
    birthDate: Date;
    gender: Gender;
    name: string;
  }
  interface UserProps {
    email: string;
    role: string;
  }

  interface SettingsProps {
    lastOpenFolder: string;
    workingDirectory: string;
  }

  interface UserSettingsProps {
    birthDate: Date;
    email: string;
    gender: Gender;
    lastOpenFolder: string;
    name: string;
    role: string;
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

  class User {
    private lastAccess: Date;
    public email: string;
    public role: string;

    constructor({ email, role }: UserProps) {
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredential(): Boolean {
      return true;
    }

    getLassAccess() : Date {
      return this.lastAccess;
    }
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;
    constructor({ lastOpenFolder, workingDirectory }: SettingsProps) {
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
    }
  }

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;
    constructor({
      birthDate,
      email,
      gender,
      lastOpenFolder,
      name,
      role,
      workingDirectory,
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthDate });
      this.user = new User({ email, role });
      this.settings = new Settings({ lastOpenFolder, workingDirectory });
    }
  }

  const userSettings = new UserSettings({
    birthDate: new Date("1998/08/05"),
    email: "f.colchon.nnz@gmail.com",
    gender: "M",
    lastOpenFolder: "/usr/documents",
    name: "Fernando",
    role: "Admin",
    workingDirectory: "/usr/desktop",
  });
  console.log({
    userSettings,
    lastAccess : userSettings.user.getLassAccess()
  });
})();
