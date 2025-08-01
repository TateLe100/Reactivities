using System;
using Domain;
using MediatR;
using Presistence;

namespace Application.Activities.Queries;

public class GetActivitiesDetails
{
    public class Query : IRequest<Activity>
    {
        // we are taking in property of Id to use in the Handler 
        // the Request will have an Id we get to use 
        public required string Id { get; set; }
    }

    public class Handler(AppDbContext context) : IRequestHandler<Query, Activity>
    {
        public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
        {
            var activity = await context.Activities.FindAsync([request.Id], cancellationToken);

            if (activity == null) throw new Exception("Activity not found");

            return activity;
        }
    }
}
