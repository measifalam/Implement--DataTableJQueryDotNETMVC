using DataTableJQuery.Data;
using DataTableJQuery.Models;
using Microsoft.AspNetCore.Mvc;

namespace DataTableJQuery.Controllers
{
    public class CustomerController : Controller
    {
        private readonly ApplicationDbContext _db;

        public CustomerController(ApplicationDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public IActionResult Index()
        {
            List<Customer> customerData = _db.Customers.ToList();
           // return Json(new { data = customerData });
            return View(customerData);
            //return new JsonResult(customerData);
        }
        public IActionResult GetJson()
        {
            List<Customer> customerData = _db.Customers.ToList();
             return Json(new { data = customerData });
            // return View(customerData);
           // return new JsonResult(customerData);
        }
    }
}
