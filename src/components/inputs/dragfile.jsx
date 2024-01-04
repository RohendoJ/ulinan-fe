import { Fragment, useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { IoCloudUploadOutline } from "react-icons/io5";
import { FaArrowDownLong } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

export const UploadDragField = ({
  label,
  name,
  defaultImages,
  isCategory,
  required,
  disabled,
  onChange,
  height = "h-[16rem]",
}) => {
  const [images, setImages] = useState(defaultImages || null);

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (isCategory) {
        setImages(URL.createObjectURL(acceptedFiles[0]));
      } else {
        setImages([
          ...images,
          {
            id: (Math.random() * 1000).toString() + "-" + new Date().getTime(),
            name: acceptedFiles[0].name,
            image: URL.createObjectURL(acceptedFiles[0]),
          },
        ]);
      }
    },
    [images, isCategory]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  useEffect(() => {
    if (defaultImages) {
      setImages(defaultImages);
    }
  }, [defaultImages]);

  return (
    <section
      className={`w-full ${
        images?.length > 0 ? (isDragActive ? height : "h-full") : height
      }  flex flex-col gap-3`}>
      <label
        className="md:text-base text-sm font-semibold text-[#1B4242]"
        htmlFor="dropzone-file">
        {label}
      </label>
      <div className="w-full h-full border-2 border-black p-4 rounded-md">
        <div
          {...getRootProps()}
          className={`w-full h-full flex flex-col items-center justify-center border-2 duration-200 active:border-[#A2D2FF] active:bg-slate-50 ${
            isDragActive
              ? "border-[#A2D2FF] bg-slate-50 gap-5"
              : "border-black gap-1"
          }  border-dashed rounded-md`}>
          <input
            {...getInputProps({
              onChange: onChange,
              id: name,
              name: name,
              disabled: disabled,
              required: required,
            })}
          />
          {isDragActive ? (
            <Fragment>
              <FaArrowDownLong className="text-3xl lg:text-5xl text-[#A2D2FF] animate-bounce" />
              <p className="text-lg lg:text-xl font-bold text-[#A2D2FF]">
                Drop the file here
              </p>
            </Fragment>
          ) : (
            <Fragment>
              {isCategory && images ? (
                <div className="relative pointer-events-auto">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      const inputFile = document.getElementById(name);

                      setImages(null);
                      inputFile.value = null;
                    }}
                    className="flex items-center justify-center rounded-full w-6 h-6 absolute top-4 right-4 bg-white bg-opacity-80">
                    <RxCross2 />
                  </button>
                  <img
                    src={images}
                    alt="preview"
                    className="w-[13rem] h-[13rem] object-cover"
                  />
                </div>
              ) : !isCategory && images?.length > 0 ? (
                <div className="relative flex items-center gap-2">
                  {images.map((item, index) => (
                    <div key={index} className="relative pointer-events-auto">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          const inputFile = document.getElementById(name);

                          const newImages = images.filter(
                            (image) => image.id !== item.id
                          );

                          setImages(newImages);
                          inputFile.value = null;
                        }}
                        className="flex items-center justify-center rounded-full w-6 h-6 absolute top-4 right-4 bg-white bg-opacity-80">
                        <RxCross2 />
                      </button>
                      <img
                        src={item.image}
                        alt="preview"
                        className="w-[13rem] h-[13rem] object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <Fragment>
                  <IoCloudUploadOutline className="text-6xl lg:text-8xl text-[#A2D2FF]" />
                  <p className="text-base lg:text-xl font-bold text-[#A2D2FF]">
                    Drop File here of browse
                  </p>
                </Fragment>
              )}
            </Fragment>
          )}
        </div>
      </div>
    </section>
  );
};
