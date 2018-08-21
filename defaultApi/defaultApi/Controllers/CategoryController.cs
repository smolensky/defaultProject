using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using defaultApi.Models;
using defaultApi.UtilityInterfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace defaultApi.Controllers
{
    [Route("api/category")]
    public class CategoryController : Controller
    {
        private defaultModel _context;
        private ICategoryUtility _categoryUtility;
        public CategoryController(defaultModel context, ICategoryUtility categoryUtility)
        {
            _context = context;
            _categoryUtility = categoryUtility;
        }

        // GET: api/<controller>
        [HttpGet]
        public IActionResult Get()
        {
            var model = _context.Set<Category>();

            return Ok(model);
        }

        // POST api/<controller>
        [HttpPost]
        public IActionResult Post([FromBody]Category value)
        {
            var model = _context.Categories;
            var categoryItem = model.FirstOrDefault(x => x.Title == value.Title);

            if (categoryItem != null)
            {
                return Ok(model);
            }
            else
            {
                value = _categoryUtility.GenerateCategory(value);

                model.Add(value);
                _context.SaveChanges();
            }

            return Ok(model);
        }
    }
}