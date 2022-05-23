(() => {
  interface Product {
    id: number;
    name: string;
  }

  class ProductService {

    private htttpAdapter: Object = {}

    getProduct(id : number){
      console.log("Producto: ", { id, name: "OLED Tv" });
    }
    
    saveProduct(product : Product){
      console.log("Guardando en base de datos", product);
    }
  }

  class Mailer{
    private emailSender : string = "f.colchon.nnz@gmail.com"
    private keySMTP : string = "XXXXX"

    sendEmail(emailList : string [], template : 'to-clientes' | 'to-admin') {
      console.log("Enviando correo a los clientes",{template,emailList});
    }
  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {
    private productservice : ProductService;
    private mailer : Mailer;

    constructor(productService : ProductService, mailer: Mailer){
      this.productservice = productService;
      this.mailer = mailer;
    }

    loadProduct(id : number){
      this.productservice.getProduct(id)
    }

    saveProduct(product : Product){
      this.productservice.saveProduct(product);
    }

    notifyClients(){
      this.mailer.sendEmail([],'to-clientes');
    }
  }

  class CartBloc {
    private itemsCart: Object[] = [];
  
    addToCart(productId: number) {
      console.log("Agregando al carrito ", productId);
    }
  }

  const productoService = new ProductService();
  const mailer = new Mailer()

  const productBloc = new ProductBloc(productoService,mailer);
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients();
  cartBloc.addToCart(10);
})();
