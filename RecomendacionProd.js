function recommendProduct(age, isMember, purchaseHistory) {
    if (
      (isMember && purchaseHistory.tech >= 5) ||
      (age >= 18 && age <= 30 && purchaseHistory.fashion >= 2)
    ) {
      return "Producto de alta tecnología";
    }
  
    if (
      (!isMember &&
        Object.values(purchaseHistory).reduce((a, b) => a + b, 0) >= 3) ||
      (age >= 25 && age <= 40)
    ) {
      return "Producto de moda";
    }
  
    // Recomendación de producto genérico
    return "Producto genérico";
  }
  
  console.log(
    recommendProduct(22, true, { tech: 6, fashion: 1, other: 2 })
  ); // "Producto de alta tecnología"