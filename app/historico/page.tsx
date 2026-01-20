import SideBar from '@/app/ui/sideBar';
import Card from '@/app/ui/card';

export default function Historico() {
    return (
        <section className="grid grid-cols-[auto_1fr]">
            <SideBar />
            <Card>
                <h1>Historico</h1>
            </Card>
        </section>
    );
}
