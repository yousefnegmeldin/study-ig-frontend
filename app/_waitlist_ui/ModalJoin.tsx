import { useState, FormEvent } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
const ModalJoin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState<boolean>(false);

  type waitlistData = {
    name: string;
    email: string;
    content: string;
  };

  const onSubmit = async (data: waitlistData) => {
    setLoading(true);
    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setLoading(false);
    if (res.ok) {
      //@ts-ignore
      document.getElementById("my_modal_2").close();
      toast.success("Thank you for joining the waitlist!");
    } else {
      toast.error("An error occurred, please try again later.");
    }
  };

  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn bg-brand text-white animate-bounce"
        onClick={() => (document.getElementById("my_modal_2") as HTMLDialogElement)?.showModal()}
      >
        Join Waitlist
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <form className="flex flex-col items-center gap-8 " onSubmit={handleSubmit(onSubmit)}>
            <label className="input input-bordered flex items-center gap-2 w-3/4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" {...register("email", { required: true })} placeholder="Email" />
            </label>
            <label className="input input-bordered flex items-center gap-2 w-3/4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" {...register("name", { required: true })} className="grow" placeholder="Name" />
            </label>
            <textarea
              {...register("content")}
              className="w-3/4 input-bordered input h-24 resize-none p-4"
              placeholder="Write about any feature you wish to see in this website!"
            />
            <button type="submit" className="btn btn-active bg-brand text-white hover:bg-brand">
              {loading && <span className="loading loading-spinner"></span>}
              Join waitlist!
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default ModalJoin;
