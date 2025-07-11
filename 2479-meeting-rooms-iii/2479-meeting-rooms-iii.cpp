class Solution {
public:
    using info = pair<long long, int>; // (ending time, room number)

    static int countr0(bitset<100>& freeRoom) {
        unsigned long long* f =
            reinterpret_cast<unsigned long long*>(&freeRoom);
        if (f[0])
            return countr_zero(f[0]);
        return 64 + countr_zero(f[1]);
    }
    static constexpr bitset<100> mask = ULLONG_MAX;
    static int mostBooked(int n, vector<vector<int>>& meetings) {
        int M=0;
        int time[500000]={0};// each meeting has the unique start[i]
        for (auto& m : meetings) {
            const int s = m[0], e = m[1];
            time[s]=e;
            M=max(M, s);
        }

        vector<int> count(n, 0);

        bitset<100> freeRoom;
        if (n < 64)
            freeRoom = static_cast<bitset<100>>((1ULL << n) - 1);
        else
            freeRoom =
                (mask | (static_cast<bitset<100>>(((1ULL << (n - 64)) - 1)))
                            << 64);

        priority_queue<info, vector<info>, greater<info>> used;

        for (int s=0; s<=M; s++) {
            const int e=time[s];
            if (e==0) continue;
            int room;
            while (!used.empty() && used.top().first <= s) {
                room = used.top().second;
                // set room-th bit 1
                freeRoom[room] = 1;

                used.pop();
            }
            long long start, m_time = e-s;
            if (freeRoom == 0) {
                tie(start, room) = used.top();
                used.pop();
            } 
            else {
                start = s;
                // Set room-th bit 0
                room = countr0(freeRoom);
                freeRoom[room] = 0;
            }
            count[room]++;
            used.emplace(start + m_time, room);
        }
        int idx = max_element(count.begin(), count.end()) - count.begin();

        return idx;
    }
};

auto init = []() {
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    return 'c';
}();