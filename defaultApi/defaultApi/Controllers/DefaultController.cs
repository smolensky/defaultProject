using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using defaultApi.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace defaultApi.Controllers
{
    [Route("api/[controller]")]
    public class DefaultController : Controller
    {
        private defaultModel _context;

        public DefaultController(defaultModel context)
        {
            this._context = context;
        }

        // GET: api/<controller>
        [HttpGet]
        public IActionResult Get()
        {
            var model = _context.Set<TodoItem>();

            return Ok(model);
        }

        // POST api/<controller>
        [HttpPost]
        public IActionResult Post([FromBody]TodoItem value)
        {
            var model = _context.TodoItems;
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
            temp.Comment = value.Comment;
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
