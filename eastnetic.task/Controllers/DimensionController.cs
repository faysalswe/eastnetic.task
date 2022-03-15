using System;
using eastnetic.task.Extension;
using eastnetic.task.ViewModels;
using Microsoft.AspNetCore.Mvc;


namespace eastnetic.task.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DimensionController : ControllerBase
    {
        [HttpGet]
        public RectangleDimension GetInitialDimension()
        {
            string filePathWithName = $"{Environment.CurrentDirectory}/data/rectangle.json" ;
            RectangleDimension rectangle = filePathWithName.JsonFilePathToObject<RectangleDimension>();
            return rectangle;
        }

        [HttpPut]
        public IActionResult ChangeDimension(RectangleDimension dimension)
        {
            string filePathWithName = $"{Environment.CurrentDirectory}/data/rectangle.json";
            filePathWithName.FileSaveToLocation(dimension.ObjectToJsonString());
            return Ok();
        }
    }
}
