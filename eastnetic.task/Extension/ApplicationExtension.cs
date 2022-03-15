using Newtonsoft.Json;
using System.IO;

namespace eastnetic.task.Extension
{
    public static class ApplicationExtension
    {
        public static T JsonFilePathToObject<T>(this string filepath)
        {
            return JsonConvert.DeserializeObject<T>(File.ReadAllText(filepath));
        }


        public static string ObjectToJsonString(this object model)
        {
            return JsonConvert.SerializeObject(model);
        }


        public static void FileSaveToLocation(this string filePath, string content)
        {
            File.WriteAllTextAsync(filePath, content);
        }
    }
}
