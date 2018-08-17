using defaultApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace defaultApi.Utilities
{
    public class DefaultUtility
    {
        public Guid WriteId()
        {
            Guid result = new Guid();
            return result;
        }

        public TodoItem GenerateItemModel(TodoItem model)
        {
            TodoItem result = new TodoItem();

            result.Id = WriteId().ToString();
            result.Title = model.Title;
            result.Status = model.Status;

            return result;
        }

        public Category GenerateCategory(Category model)
        {
            Category result = new Category();

            result.Id = WriteId().ToString();
            result.Title = model.Title;

            return result;
        }
    }
}
