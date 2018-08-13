using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace defaultApi.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            obj result = new obj() {
                id = "test1",
                title = "test1",
                comment = "test1",
                status = true
            };
            //for(int i = 0; i < 10; i++)
            //{
            //    result[i].id = "_test" + i;
            //    result[i].title = "_test" + i;
            //    result[i].comment = "_test" + i;
            //    result[i].status = true;
            //}

            return Ok(result);
        }

    public class obj
    {
        public string id = "";
        public string title = "";
        public string comment = "";
        public bool status = true;
    }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
