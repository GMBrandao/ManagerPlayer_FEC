using System;

namespace ManagePlayer.Console
{
    class Program
    {
        static void Main(string[] args)
        {
            try 
            {
                Console.WriteLine($"Inicio Console - {nameof(ManagePlayer)}");



                Console.WriteLine($"Fim Console - {nameof(ManagePlayer)}");
            }
            catch(Exception ex)
            {
                Console.WriteLine($"Erro na execução - Exception: {ex.Message}");
            }
        }
    }
}
