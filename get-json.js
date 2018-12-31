const csv = require('csvtojson')
const fs = require('fs')

const csvData = 'src/data/PaymentsDataWorksheet.csv'
csv({
  colParser: {
		Amount(item, head, resultRow, row , colIdx) {
      return Math.round(100 * parseFloat(item))
    }
	}
})
.fromFile(csvData)
.then((data) => {
  fs.writeFileSync('src/data/paymentsData.json', JSON.stringify(data), 'utf8')
})
