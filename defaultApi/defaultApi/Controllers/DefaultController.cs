using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using defaultApi.Models;
using defaultApi.Utilities;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace defaultApi.Controllers
{
    [Route("api/[controller]")]
    public class DefaultController : Controller
    {
        private defaultModel _context;
        private DefaultUtility _utility;

        public DefaultController(defaultModel context, DefaultUtility utility)
        {
            this._context = context;
            this._utility = utility;
        }

        // GET: api/<controller>
        [HttpGet]
        public IActionResult Get()
        {
            var model = _context.Set<TodoItem>();

            return Ok(model);
        }

        // GET: api/<controller>/<query>
        [HttpGet("{term}")]
        public IActionResult Get(string term)
        {
            var model = _context.Set<Category>();

            return Ok(model);
        }

        // POST api/<controller>
        [HttpPost]
        public IActionResult Post([FromBody]TodoItem value)
        {
            var model = _context.TodoItems;
            var catModel = _context.Categories;

            if (string.IsNullOrEmpty(value.Id))
            {
                value = _utility.GenerateItemModel(value);
            }
           
            if (!string.IsNullOrEmpty(value.Category.Title))
            {
                if (catModel.FirstOrDefault(x => x.Title == value.Category.Title) != null)
                {
                    value.Category = catModel.FirstOrDefault(x => x.Title == value.Category.Title);
                    value.CategoryId = value.Category.Id;
                } else
                {
                    value.Category = _utility.GenerateCategory(value.Category);
                    value.CategoryId = value.Category.Id;
                    var category = new Category()
                    {
                        Id = value.Category.Id,
                        Title = value.Category.Title
                    };
                    catModel.Add(category);
                }
                
            }
            
            
            model.Add(value);
            _context.SaveChanges();

            return Ok(model);
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public IActionResult Put(string id, [FromBody]TodoItem value)
        {
            var model = _context.TodoItems;
            var temp = model.Find(id);
            temp.Status = value.Status;
            temp.Id = value.Id;
            temp.Title = value.Title;
            _context.SaveChanges();

            return Ok(model);
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            var model = _context.TodoItems;
            model.Remove(model.Find(id));
            _context.SaveChanges();

            return Ok(model);
        }
    }
}
