interface Bird {
  eat(): void;
}

interface FlyingBird {
  fly() : void;
}
interface RunningBird{
  run(): void;
}
interface SwimergBird{
  swim(): void;
}

class Tucan implements Bird,FlyingBird {
  public fly(): void {}
  public eat(): void {}
}

class HumminBird implements Bird,FlyingBird {
  public fly(): void {}
  public eat(): void {}
}

class Ostrich implements Bird,RunningBird {
  public eat(): void {}
  public run(): void {}
  
}

class Penguin implements Bird, SwimergBird{
  public eat(): void {}
  public run(): void {}
  public swim(): void {}
}