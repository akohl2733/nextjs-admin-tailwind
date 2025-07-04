export async function GET() {
    const data = [
        { name: "Occupancy", value: Math.floor(Math.random() * 21) + 80 },
        { name: "Revenue", value: Math.floor(Math.random() * 10000) + 10000 },
        { name: "Active Sessions", value: Math.floor(Math.random() * 301) + 100 }
    ];

    return Response.json(data);
}

export async function POST(req: Request){
    try {
        const body = await req.json();

        if (!body.name || typeof body.value != 'number'){
            return new Response(
                JSON.stringify({status: 'error', message:"Invalid Payout"}),
                {status: 400}
            );
        }

        return Response.json({
            status: 'success',
            received: body
        });
    } catch (err) {
        return new Response(
            JSON.stringify({status: 'error', message: "invalid JSON"}),
            { status: 400 }
        );
    }
}