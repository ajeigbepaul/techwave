// "use client";

// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";


// interface Props {
//   title?: string;
//   description?: string;
//   open: boolean;
//   hideCloseIcon?: boolean;
//   onClose: () => void;
//   body: React.ReactElement;
//   handleSubmit:(values: any) => void ;
//   isEdit?: boolean;
//   details?:any
// }

// export default function CreateFaqModal({
//   title,
//   description,
//   open,
//   onClose,
//   body,
//   hideCloseIcon,
//   handleSubmit,
//   isEdit,
//   details
// }: Props) {
//   const onChange = (open: boolean) => {
//     if (!open) return onClose();
//   };

//   return (
//     <Dialog open={open} onOpenChange={onChange}>
//       <DialogContent
//         hideCloseIcon={hideCloseIcon}
//         className="md:left-[80%] md:top-[40%]"
//       >
//         <DialogHeader>
//           <DialogTitle className="font-display text-opexBlue-dark  uppercase">
//             {isEdit ? "EDIT QUESTION" : title}
//           </DialogTitle>
//           <DialogDescription>{description}</DialogDescription>
//         </DialogHeader>
//         <div className="">{body}</div>
//         <DialogFooter>
         
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// }
