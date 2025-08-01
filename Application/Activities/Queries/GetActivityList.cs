using System;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Presistence;

namespace Application.Activities.Queries;

public class GetActivityList
{
    // recieves the request with (Query)
    public class Query : IRequest<List<Activity>> { }
    // create a Handler and returns the response of (List<Activity>)
    public class Handler(AppDbContext context) : IRequestHandler<Query, List<Activity>>
    {
        public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
        {
            return await context.Activities.ToListAsync(cancellationToken);
        }
    }
}
