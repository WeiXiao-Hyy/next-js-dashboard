import {lusitana} from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import {CreateInvoice} from "@/app/ui/invoices/buttons";
import {Suspense} from "react";
import {InvoicesTableSkeleton} from "@/app/ui/skeletons";
import InvoicesTable from "@/app/ui/invoices/InvoiceTable";
import {fetchInvoicesPages} from "@/app/lib/data";
import Pagination from "@/app/ui/invoices/pagination";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Invoices',
};

export default async function Page({
                                     searchParams,
                                   }: {
  searchParams?: {
    query?: string;
    page?: string;
  }
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchInvoicesPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>

      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices"/>
        <CreateInvoice/>
      </div>

      <div className="mt-5 flex w-full justify-center">
        <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton/>}>
          <InvoicesTable query={query} currentPage={currentPage}/>
        </Suspense>
      </div>

      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages}></Pagination>
      </div>
    </div>
  )
}
