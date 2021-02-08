class BillService {
  static async readBills() {
    try {
      return new Promise((resolve, reject) => {setTimeout(() => {
        console.log('GO')
        resolve({"yeah":"TRUE"})
      }, 100);});
    } catch (err) {
      console.log(err);
    }
  }
}

export default BillService;
