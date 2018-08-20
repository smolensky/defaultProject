using defaultApi.Models;
using defaultApi.UtilityInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace defaultApi.Utilities
{
    public class Utility : IUtility
    {
        public Guid WriteId()
        {
            Guid result = Guid.NewGuid();
            return result;
        }
    }

    public class DefaultUtility : IDefaultUtility
    {
        private IUtility _utility;
        public DefaultUtility(IUtility utility)
        {
            _utility = utility;
        }

        public TodoItem GenerateItemModel(TodoItem model)
        {
            TodoItem result = new TodoItem();

            result.Id = _utility.WriteId().ToString();
            result.Title = model.Title;
            result.Status = model.Status;

            return result;
        }
    }

    public class CategoryUtility : ICategoryUtility
    {
        private IUtility _utility;
        public CategoryUtility(IUtility utility)
        {
            _utility = utility;
        }

        public Category GenerateCategory(Category model)
        {
            Category result = new Category();

            result.Id = _utility.WriteId().ToString();
            result.Title = model.Title;

            return result;
        }
    }
}
