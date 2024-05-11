import List from '@/components/ui/List';
import { Eye, Flame, Hand, Highlighter, Mail, ThumbsUp, User, Video } from 'lucide-react';
import { FC } from 'react';

interface StatsProps {}

const Stats: FC<StatsProps> = ({}) => {
    return (
        <div className="hidden md:flex flex-col w-max px-4 gap-5 text-info">
            <List sizes="xs" className="gap-4">
                <User size={16} />
                <span>
                    <b className="text-secondary">Imran</b> Ali
                </span>
            </List>
            <List sizes="xs" className="gap-4">
                <Flame size={16} />
                <span>
                    <b className="text-secondary">Mern Stack </b> Developer
                </span>
            </List>
            <List sizes="xs" className="gap-4">
                <Mail size={16} />
                <span>
                    <b className="text-secondary">imraan.dev@proton.me</b>
                </span>
            </List>
            <List sizes="xs" className="gap-4">
                <Highlighter size={16} />
                <span>
                    <b className="text-secondary">Discuss some Project</b>
                </span>
            </List>
        </div>
    );
};

export default Stats;
