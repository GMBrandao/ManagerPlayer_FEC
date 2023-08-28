using ManagePlayer.Domain.Interfaces.Repositories;
using ManagePlayer.Domain.Interfaces.Service;
using ManagePlayer.Domain.Service;
using ManagePlayer.Infrastructure.Data.Sql.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace ManagePlayer.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(option =>
            {
                option.AddPolicy(name: "_myOrigins",
                                   policy =>
                                   {
                                       policy.WithOrigins("*");
                                   });
            });
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
                {
                    Title = "Decisoes",
                    Version = "v1"
                });
            });
            services.AddControllers();

            services.AddTransient<IDecisoesRepository, DecisoesRepository>();
            services.AddSingleton<IDecisoesService, DecisoesService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseSwagger();

            app.UseSwaggerUI(x =>
            {
                x.SwaggerEndpoint("/swagger/v1/swagger.json", "Decisoes v1");
            });

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors("_myOrigins");

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
