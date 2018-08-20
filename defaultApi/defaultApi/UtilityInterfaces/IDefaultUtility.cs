using defaultApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace defaultApi.UtilityInterfaces
{
    public interface IDefaultUtility
    {
        TodoItem GenerateItemModel(TodoItem model);
    }
}
