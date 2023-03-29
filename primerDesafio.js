
addProduct(title, description, price, thumbail, code, stock); {
    if(!title || !description || !price || !thumbail || !code || !stock) {
        console.error(`Debe llenar todos los campos.`);
        return;
    }
    if(this.products.some((prod) => prod.code === code)) {
        console.error(`El producto con ${code} ya existe.`);
        return;
    } else {
        const product = {
            id: this.id,
            title,
            description,
            price,
            thumbail,
            code,
            stock,
        };
        this.products.push(product);
        console.log(`Producto ${title} con Id: ${this.id} se agrego con exito`);
        this.id++;
    }
}


getProductById(productId); {
    if(productId === undefined) {
        console.error('Debe detallar un id de producto');
        return;

    }
    const product = this.products.find((p) => p.id === productId);
    !product? console.error('Not found') : console.log(product);
}