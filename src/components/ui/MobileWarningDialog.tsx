import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { MonitorOff } from 'lucide-react';
import { Button } from './button';
import {
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogDescription,
} from '@/components/ui/alert-dialog';

const MobileWarningDialog = () => {
	const isMobile = useIsMobile();
	const [isDialogOpen, setIsDialogOpen] = useState(true);

	if (!isMobile || !isDialogOpen) return null;

	return (
		<AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
			<AlertDialogTrigger className="hidden" />
			<AlertDialogContent className="max-w-md">
				<AlertDialogHeader className="flex flex-col items-center">
					<MonitorOff className="w-12 h-12 text-red-500" />
					<AlertDialogTitle className="mt-2 text-2xl font-bold text-center">
						Mobile Not Supported
					</AlertDialogTitle>
					<AlertDialogDescription className="text-center font-medium text-gray-800 mt-2">
						This page is optimized for desktop. Some features may not work
						correctly on smaller screens.
						<br />
						Please switch to a Laptop or Desktop for the best experience.
					</AlertDialogDescription>
				</AlertDialogHeader>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default MobileWarningDialog;
