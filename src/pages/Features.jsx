import React from "react";

const Features = () => {
  const features = [
    {
      title: "Marketing",
      desc: "Lorem ipsum dolor sit amet consectetur. Vivamus nullam fermentum consequat.",
      img: "data:image/webp;base64,UklGRhYDAABXRUJQVlA4TAoDAAAvS8ASEEehqG0jyTOz13P5ky0NxW3bRkzS69n9lzWCtm3jFsn4c/yLqG0bdQgWCINw/F93DA5Kh6AB/X+8hxlUoQqAJziZk5keAlWVRvEFqgSgAAlICMZUAYAqn10sgqVCuj0YrkqDum3rTRvoo4cUGywCDJ9OJm5i3v8VEUXgaf8i+j8B8n92eTFF/CpOAJq8hifYHjR6CQZ1ksLHS+gxIqJo8UpAy9ehgClfRZUr0BXbFG232MQ7EMkV0Gu87k/W2mQPIvkA0N3el6XQV0trZVgSlduJPBsLoKZ4n6tRWZ7CXwuUawARyRqLd2gvt7ey7Bnc8hU9XIOISFr3BDbxzPgD10DTZ1a1vW6GJj4Zf+AabnZ0zjnI3OLn3aKRT8YfuO7FC6WsfFp+Z2T8wR5LaoY5GZuvSXTVI3SqarELvNHVwgFG/GsGpvuTtKqqdlUBf6T9EaYfq3q+RTYrL8ZbxVtEZVleNjDbGRbeNlC8uylg6L0KcQCDvwvTY8Q/Wj7XTT8mOqNhBuoZsVQBXOofw5zBVF4D5bpH13U6WRxiVBbWsg7/ijaAuGZQ73CWDXJjTL+qxhabrV4z/VjlFFSPEDnnHqvE9cARFO+St1hExDUv4YSdiPRHGJ1zNcPcCeoDiUismJkTNHKocgDnO0EjO4jKj8q0naoqWF0O/Ir3BI2EKm+tJajNxG9pJEh06yxeq62pq6qqwVTeDq2q6p7KfHaXEGXH1Lb3zMlsAol4GzoJuSK6WoD+7mR5CpGv5Xsv8cUC/X2U1W8g/h6zj+gK2DqVLSuGmYFqF4MFex5l25ZuBrJdgD2PsvVA7Uug3EfrZPMRMt8bREEaOpEYviRgCs5XoRI0g+Gi4ELUqPh7vsNIw/RXQipmxvIZSPJe21RCJlD6UihDhTeo+CusHDxWzMyAOdoDnC+G7GCxYsRfY+XgBtyMYg5WwK/4C0gO1qMyq3Ry7BHymQLygzlIZpRBDj5C5juBO5r0dJ4YjBw+hzYWKRV1x5MGUAX7lFd4ZqpPeY0uq+6p/O8I",
      bg: "bg-[#fff5db]", // yellow/orange
    },
    {
      title: "Personal Growth",
      desc: "Lorem ipsum dolor sit amet consectetur. Vivamus nullam fermentum consequat.",
      img: "data:image/webp;base64,UklGRkIEAABXRUJQVlA4TDYEAAAvS8ASEE+hqG0jyTN7Ppc/2C0NxW3bRkx6Prv/sLWCtm0k7zkexx/kiqBt22QIFv5sxuBQegQN8N73Xo7BKlYRVinEcKAQg00AMZAqTACrCGGV938OoUETn4OkG0iSJMlaDwSpqoV029bitvmQZGeOcYX4uJXSWEOD8v5vWD4GWVrp34j+OxCANG6g3djh5mrE7Av0s7CaqwOhA+zzYZ54QqBtjiJODEAfBFM4cT4EFgPAAeooqms6mMMoqoDzURTRDPijKKK1/zyMIqKfRPH5B1PLpWVrLn93szUNwH3GvyaiqfZTHysF/AHAehhaBvC6n5KndLe5ITrz3Q/1nlb0CFxXokZYif8NLPdUry6tqGJ0IRsDmBeilcG7KaJJ9L2G4Jv4mmUvRWSFezOM1hZGzJpfeylagZPASOT1l5g1bidFVAO1gGNmraTZ7aREWb4Tgw+9zERtV9Bl3urlDZ2GYTAw8uZuSs3jmNkUONwohC1Eg4CG3a4yDc9TcotgxNMAEKXQlw/aoDqpKqGYRVyVemGOn3aN6GS/ZWR3TaKz0I0r0dpcAVcn7lxF5G9AyKkG9DaVOoO1MSuihuEi6R14CU3LwRQc2G9XRFp0gxqB50pkbkjyywF6CSUNZWR/j1FUiS6vHQKfiU5Rv6tXdkjVD85OdxhqvfCdLgpLfCVpFPB5+3i00AI6LBmT6PcK0EOGLdz2QQucBOwwDFPkAN+yd0u6OSpH+ciWZelTV88Dy1Y8xcO/9Ga9MrMDlyPjKb4v3kaw6PdaV0QjOJHr6sA6w4LhsGgGnJmqBK6RWVutO3DKO1oUsM9+lmBqzMbz4wOCWnzlk/TzLn/jkngMIf04PrVp82CEpn3qABu8uJWd1QTfzHBOV+4PwGFmXxT5HmCVuLMV0SoXkhamsDVMXDS7iqYY5XpqSfJD+mUzEy02VOMe6MRFexVvqcSxSDMeGQC3w3AJCTj5H8kX9JtJPd2I/fcEaRCpfq8c8nwoDrvkvOMKHoYeUOJOiUvtOEMHp6IpmiFgUo91YhWfz5QochgBGX4BdXGYSiy5IdHvLK6eE8XPbU82+0CmR31kqGpnWLnI5qZpbsB3YqficFkyfAdqEfpckE+u3yfoZXmJndELlysgy7oWUBf2O1TKO4rBJTBJUzNiWxltz5fo/x7w6TM8xWGzz7BP7onOwKt88/MqpjET7fCW1MsITvth/T/NcH4XpA/WiyI/GsB9UYRLthcE6oLf9ph88OjyJRTm0e3ylimfa+ScujhXs8lTLNomwzOifuubDJ9EPeqCfPqU1zHG/OTbwwcOircsXIRTDnUcVhdARWiBvNfCl3owixlflA9FeCpec5eisO0zvgMPGV7lZzJsQT7fm/dqjNuPFXa7S9hd9mqz1gV7rxYwWmvk8zGAEVlZnaEFtJ7CgjsOiU7dYfhJ/0US",
      bg: "bg-[#e1ffce]", // green
    },
    {
      title: "Business Startup",
      desc: "Lorem ipsum dolor sit amet consectetur. Vivamus nullam fermentum consequat.",
      img: "data:image/webp;base64,UklGRowDAABXRUJQVlA4TIADAAAvS8ASEE+hqG0jyTN7Ppc/2C0NxW3bRkx6Prv/sLWCtm0k7zkexx/kypCRJEG9BNsI72/xBo/ST7AB3vveyzFYxSrCKgcxHDiIwSaAGGphAoSnihBW+f7Pi2hwiZ+D1A2UpCSt9UCoqhbUrW3P0lhPENut/UJheHMX7AhSQ8//EAkqobN/R/R/AvSv/d637X74FdyrJ2r9+jYGeKs9YNnKNh6KXM4pP4DfrCrzWC6NZk66Gj5bU4UFaTjDSyYFT7miHJ6knuhe2sGwngKTVMdMUkWxHs9ZktFKuTWSTvjVjDBEyrZte0m6gFtLgI2khuheUoCflY2HqqoMk5SvSJ6zpP/KTGojPV6rrSgl1VhZGrWkinI9TzBIJ6KNlMFTUmHqZkbDnPR0hD87yRmm2TB1y2SfxMt+ohzqTBrBSa6GfOL2pSdq2RIVN9pFkk5gvXTN5XoPb5I0GDeWS0CTT5+OwKsknQB/LD6OHvxfSfoCqi6fnrAljLPiweAiSeHAbBUkqQfLFd8tU1FM3CCNhneaht0R/uyCpplho/SdTQrKJU54J8n4cArwFpEC/CjeQ5B7x0vKPOclRviQVIFtdKB+RE2hwaCW9A5hCZ3gVdIJeL2Au2+E7TvQSPqCNy06fkKRScHAw899G/BgueTeodbC4RMoP9rGAwz35QC+aT9KoB6Xkk7GjWV2T1ZO4v6kFMPTsYqDbW4bDOoqWuxGJb7zsL/lGfxfrTcYvM59gV215mDwGvsCC1p3+ITnyTNY0NqD4beQeyxo/cHw4LGg3zAnetXvuJu86besoNaveYXN7xHg5/+A6+4/w0t3f5bEhWQvKdTp1CkYnZLssH9POyT5kUZFsmUKwVKpQwpSiw+Le96UaA4/WjiDIZURtkvl4FKRcV6qxZTskWKpI2U6DbZUTZtOB24h2KYTYHOD2x8NfNlnN+SwSUeebu7ZM2v9XA9KuKaZ+QKqXdftjsB+pqFM6UAZy6AOigbDu1hFkdIOH7tA0GyALuY5p5TDT6TDuznn2UYyGFIaYRsZoXAxV0CI5OBSknGO6AT2MXyHy6uHN0VbTEkfKWI6ceOb4kfKtBpsRuFgE2uCZmvatDpwM5LGEEbdCtu0AmxuuTeHTVrydI/rQYnXNI9rKFM7UD6uokhth3+c55xaDsOjMhhSGw3swWBK/mo83F/T07jtHj3q8Q==",
      bg: "bg-[#c9d2e3]", // blue
    },
    {
      title: "Award Winner",
      desc: "Lorem ipsum dolor sit amet consectetur. Vivamus nullam fermentum consequat.",
      img: "data:image/webp;base64,UklGRmoFAABXRUJQVlA4TF4FAAAvS8ASEF+hqG0jyTOz13P5ky0NxW3bRkzS69n9l7WBtG2yKbl/kR+iNpJyp4BKwQL+PzhhUXCB+v+8xwxVVAFVBtAA/OBj8JMFSZZkoZugVWWhgS+kygI0kIFEQRUAVW53DkBVHnzbtl23sW1bFRTFYY3RdYMVtgZlqItkQwlC8f9fCN77GO8R/Z8A/b91t8fD/6/4iAB2/Wc5753kAmAdcJKUvP9HFA1A10V49VIyiI0BMbjN7SKj8a48PRm3YmOFEe+p3z/qQ6/RdKgfZf/+LzQbO0PS4gfwmyqMoHH3eb3d/OcEdTRb8gZpwN2CMdoFP1TBq9jIpYnAlyT5EJlpoZCkJxBDsZ5rAKyUVLwA2vs+Serf+7oDODlJdwM4rRagPZSS9BEh3ntNfj8B20lSeTA4r1TCUbkLEO+9ZqcncFLe/ya6dQKm3HXQJi2aDE6ZEtzWaakz18FRS6cWTpk6Hms9shccteITzlm7jW84atUWvKSOepUCKqmAoHV7w5z0pFnDdViSfmNpzu06QyUcpRJOyxUGX9IFKs0McJ6hmuikJzRuocLgKKnFNLMAopvRR45S/4RmoQClpB1UcwIRfs1QTZSkO1yWifxIUo1pZgFVi80pwUtSS7PIDnZZR5gTMJVwmSGjzg7YIgn+SOphPyldz1BJLXb2blJNt0YfOUoqwY34l5GbpJI8dqEYuYGTFGgWUUt00oGo4T6Sx/YtSfc2kjcjCf5IBVTLJLhJD7pJ/373mtiX/5nSg5cCpoU7HtKTZkQHsEKTdxFLI4Kb1FIv1VLPUAVWTNlFLGnKXuoWK6CSHnQTVIEVY9eIJU3y0pNmoQBJOmBTVMHfY4YlTdzBTirBL2MESVdwU/SaEvmlqSU4SS3NIgl2khL4SR2PsZYw6UEnSQdsqT+SFDlO6WEvufNFUk03qSUMxUV6+JXVdFNK2LlTBLvoQJxSQJUFmkXUYoWkEvyEK5wiRMD+gj8TLuAk7aBa5h0xL8loJtTkdZ9a8v0EI0j6ANPCFeClO/ixAxCSJJUG+LEPSNI3WFpKyTCpN5oxHUKp0SpUGi0iQSqg67V8CV4q4TS2dIMlqcZ6rWk8JD3hus43VJJaglZtqSX1Rtyt8Q21JHU81npIUjLidblv6JS3az1pMiWD00LuBV2f9ZFqnT38K1MysGKJa4Rnr/wb0jr6DT+fktQ/geDn+AbilyQ5/4JaKycDCIWkygD78W7IXX8i0CZJvgFotXp6RsB2klQZeWyaxiJ5W0rSN0D80ib3gDnl5dOY2N13yt9ATNpowCLHAUlpf3jU9eNW9hptiXDeyBu+aqIbWdBD1RLdNgxTAiskd71+Tvm8eSd5w5TgZxMXqKQDYAZg16GPCGARYpLuUGygMIIkVcb4SZILjLdvSX2k2cBfkDJ9w2PfqzSwECK8dkr7F3jlB/CrFVArLyJB+Y7hTnlvNANqsdUClgYCMQ18Q92+XuAzlXAZKOG40gUq5QUclRdQS1KLDaglukwvolvHMA0apsGApayE48AbjgMp8rPKB/iBC1QDV6g0+CK6TDWxyHQHv0JhBElyN6PRoGEaTpGfgT7SeSepN5oVAiTnfzqA3cAF/Iju4DPdAZqzVwXXxQqITWR4nxVG0HhvNAOBSB5fEXNLtQxave876ixAmqAKfNZRp+plDB6XAmK4JUmqMUkFHDW5xZxUgJek96EFmqWqw1ujJfyRXlg/rYSjdAGX5eXjvdTkPvJLF6g080ksFGi08ZYgwzS3jwQZj63did+QZukOZ/BbKyESNL83IGrzEWJaQCXw9/ZecNSiLVTbO2Ba9g1pe9qnhfQutTw=",
      bg: "bg-[#f9f2f3]", // purple
    },
  ];

  return (
    <div className="py-16 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${feature.bg} text-black flex flex-col items-center justify-center p-8 rounded-3xl shadow-lg text-center`}
          >
            <img
              src={feature.img}
              alt={feature.title}
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl md:text-2xl font-bold mb-2">{feature.title}</h3>
            <p className="text-sm md:text-base">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
