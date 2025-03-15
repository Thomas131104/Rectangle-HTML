export function calculate(dai, rong)
{
    if (isNaN(dai) || isNaN(rong) || (dai <= 0) || (rong <= 0))
    {
        return -1;
    }
    else
    {
        return {
            'cv' : 2*(dai+rong),
            'dt' : dai*rong
        };
    }
}