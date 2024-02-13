"use client";

import React, { useCallback } from "react";
import Product from "@/components/product/Product";
import { products } from "@/data/product";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Checkbox,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { ChevronRightIcon, CloseIcon } from "@chakra-ui/icons";
import NotFound from "@/app/not-found";

export default function page() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = useParams();

  const setQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.append(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const deleteQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const sorts = [
    {
      name: "Akıllı Sıralama",
      queryString: "sortQuery",
      value: "smart",
    },
    {
      name: "Yeni Gelenler",
      queryString: "sortQuery",
      value: "newest",
    },
    {
      name: "Fiyat: Düşükten Yükseğe",
      queryString: "sortQuery",
      value: "lowest",
    },
    {
      name: "Fiyat: Yüksekten Düşüğe",
      queryString: "sortQuery",
      value: "highest",
    },
  ];

  const filters = [
    {
      name: "Fiyat Aralığı",
      type: "checkbox",
      queryString: "priceQuery",
      values: ["0-50TL", "50-100TL", "100-500TL"],
    },
    {
      name: "Ürün Değerlendirilmesi",
      type: "checkbox",
      queryString: "reviewRateQuery",
      values: [
        "1* ve Üzeri",
        "2* ve Üzeri",
        "3* ve Üzeri",
        "4* ve Üzeri",
        "5*",
        "Puansız Ürünler",
      ],
    },
    {
      name: "RAM",
      type: "checkbox",
      queryString: "ramQuery",
      values: ["4GB", "8GB", "16GB", "32GB"],
    },
    {
      name: "Hafıza",
      type: "checkbox",
      queryString: "storageQuery",
      values: ["32GB", "64GB", "128GB", "256GB", "512GB"],
    },
  ];

  const breadcrumb = [
    { name: "Anasayfa", href: "/" },
    { name: params.category, href: `/${params.category}` },
    { name: params.name, href: `/${params.category}/${params.name}` },
  ];

  if (products.filter((item) => item.category === params.name)) {
    return <NotFound />;
  }

  return (
    <Box>
      <Breadcrumb
        py={3}
        spacing={"8px"}
        separator={<ChevronRightIcon color="orange" />}
      >
        {breadcrumb.map((item, index) => {
          return (
            <BreadcrumbItem key={index}>
              <BreadcrumbLink href={item.href}>{item.name}</BreadcrumbLink>
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
      <Flex direction={"row"} gap={6}>
        <Box
          position={"relative"}
          flexShrink={0}
          w={"300px"}
          h={"auto"}
          border={"1px solid #e0e0e0"}
        >
          <Accordion
            position={"sticky"}
            h={"100vh"}
            top={"0px"}
            overflowY={"auto"}
            allowMultiple
            defaultIndex={[...filters.map((element, index) => index)]}
          >
            {filters.map((filter, index) => {
              return (
                <AccordionItem key={index}>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      {filter.name}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Flex direction={"column"} gap={3}>
                      {filter.type === "checkbox" &&
                        filter.values.map((value, index) => {
                          return (
                            <Checkbox
                              key={index}
                              colorScheme="orange"
                              fontWeight={600}
                              isChecked={searchParams
                                .getAll(filter.queryString)
                                .includes(value)}
                              onChange={(e) => {
                                e.target.checked
                                  ? router.push(
                                      pathname +
                                        "?" +
                                        createQueryString(
                                          filter.queryString,
                                          value
                                        )
                                    )
                                  : router.push(
                                      pathname +
                                        "?" +
                                        deleteQueryString(
                                          filter.queryString,
                                          value
                                        )
                                    );
                              }}
                            >
                              {value}
                            </Checkbox>
                          );
                        })}
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </Box>

        <Flex direction={"column"} w={"100%"} gap={3}>
          <Flex
            direction={"row"}
            h={"80px"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={3}
          >
            {sorts.map((sort, index) => {
              return (
                <Button
                  key={index}
                  border={"1px solid #e0e0e0"}
                  p={2}
                  borderRadius={"24px"}
                  _hover={{ borderColor: "orange" }}
                  fontSize={"14px"}
                  bgColor={
                    searchParams.get("sortQuery") === sort.value
                      ? "orange"
                      : "white"
                  }
                  color={
                    searchParams.get("sortQuery") === sort.value
                      ? "white"
                      : "black"
                  }
                  onClick={() => {
                    router.push(
                      pathname +
                        "?" +
                        setQueryString(sort.queryString, sort.value)
                    );
                  }}
                >
                  {sort.name}
                </Button>
              );
            })}
          </Flex>
          <Flex
            direction={"row"}
            maxH={"80px"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={3}
          >
            {filters.map((filter) =>
              searchParams.getAll(filter.queryString).map((value, index) => {
                return (
                  <Button
                    key={index}
                    leftIcon={<Icon as={CloseIcon} w={2} h={2} />}
                    bgColor={"orange"}
                    onClick={() => {
                      router.push(
                        pathname +
                          "?" +
                          deleteQueryString(filter.queryString, value)
                      );
                    }}
                  >
                    {value}
                  </Button>
                );
              })
            )}
          </Flex>
          <Flex
            direction={"row"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            flexWrap={"wrap"}
            gap={8}
          >
            {products
              .filter((item) => item.category === params.name)
              .map((item, key) => {
                return <Product item={item} key={key} />;
              })}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
