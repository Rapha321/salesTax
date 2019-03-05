// calculates the total sales and total tax, grouped by company.

var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};


var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function calculateSalesTax(salesData, taxRates) {
  var output = {}

  // calculating total sales for each company
  var telusSales = 0
  var bombardierSales = 0
  salesData.forEach(function(company) {
    if (company.name === 'Telus') {
      for (var i = 0; i < company.sales.length; i++) {
        telusSales += company.sales[i]
      }
    }
    if (company.name === 'Bombardier') {
      for (var i = 0; i < company.sales.length; i++) {
        bombardierSales += company.sales[i]
      }
    }
    return telusSales
    return bombardierSales
  })


  //calculating total tax for each company
  var telusTax = 0
  var bombardierTax = 0
  salesData.forEach(function(company) {
    for (var i = 0; i < company.sales.length; i++) {
       if (company.name === 'Telus' && company.province === 'AB') {
          telusTax += (company.sales[i] * taxRates.AB)
        }
        if (company.name === 'Telus' && company.province === 'BC') {
          telusTax += (company.sales[i] * taxRates.BC)
        }
        if (company.name === 'Telus' && company.province === 'SK') {
          telusTax += (company.sales[i] * taxRates.SK)
        }

        if (company.name === 'Bombardier' && company.province === 'AB') {
          bombardierTax += (company.sales[i] * taxRates.AB)
        }
        if (company.name === 'Bombardier' && company.province === 'BC') {
          bombardierTax += (company.sales[i] * taxRates.BC)
        }
        if (company.name === 'Bombardier' && company.province === 'SK') {
          bombardierTax += (company.sales[i] * taxRates.SK)
        }
    }
    return telusTax
    return bombardierTax
  })

  output['Telus'] = {
                        'totalSales':  telusSales,
                        'totalTaxes': telusTax
                      }
  output['Bombardier'] = {
                            'totalSales': bombardierSales,
                            'totalTaxes': bombardierTax
                          }

return output
}




var results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results)

/* Expected Results:
{
  Telus: {
    totalSales: 1300,
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/