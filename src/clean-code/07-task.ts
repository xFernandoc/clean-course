(() => {
  type HtmlType = "input" | "select" | "textarea" | "radio";
  HTMLElement

  interface ElementProps {
    id: string;
    type: HtmlType;
  }

  interface InputAttributePros {
    placeholder: string;
    value: string;
  }

  interface InputElementProps {
    id: string;
    placeholder: string;
    value: string;
  }

  class HtmlElement {
    public id: string;
    public type: string;
    constructor({ id, type }: ElementProps) {
      this.id = id;
      this.type = type;
    }
  }

  class InputAttributes {
    public value: string;
    public placeholder: string;
    constructor({ placeholder, value }: InputAttributePros) {
      this.placeholder = placeholder;
      this.value = value;
    }
  }

  class InputEvents {
    constructor() {}
    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  class InputElement {
    public attributes: InputAttributes;
    public events: InputEvents;
    public element : HtmlElement;
    constructor({placeholder,value,id} : InputElementProps){
      this.attributes = new InputAttributes({placeholder,value});
      this.events = new InputEvents();
      this.element = new HtmlElement({id,type : 'input'})
    };
  }

  const nameField = new InputElement({
    id : 'txtName',
    placeholder : 'Enter first name',
    value : 'Fernando'
  });
  console.log({ nameField });
})();
